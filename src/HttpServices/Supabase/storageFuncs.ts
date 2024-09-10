import * as FileSystem from "expo-file-system";
import { decode } from "base64-arraybuffer";

import { supabase } from "@/src/Supabase/Config";

const bucketId = "storage";
const imageProcessing = async (fileUri: string) => {
  try {
    const response = await fetch(fileUri);
    const blob = await response.blob();
    const fileExt = fileUri.split(".").pop();
    //console.log("ext: ", fileExt);
    return { blob, fileExt };
  } catch (error) {
    throw new Error("failed to get the image blob");
  }
};

export const supabaseCreateFile = async (requestData: {
  path: string;
  fileBody: string;
}) => {
  return supabase.storage
    .from(bucketId)
    .upload(
      requestData.path +
        "." +
        (await imageProcessing(requestData.fileBody)).fileExt,
      (await imageProcessing(requestData.fileBody)).blob,
      {
        contentType: "image/jpeg",
      }
    );
};

export const supabaseUpdateFile = (requestData: {
  path: string;
  fileBody: string;
}) => {
  return supabase.storage
    .from(bucketId)
    .update(requestData.path, requestData.fileBody);
};

export const supabaseDeleteFile = (requestData: { path: string[] }) => {
  return supabase.storage.from(bucketId).remove(requestData.path);
};
