import * as FileSystem from 'expo-file-system';
import { decode } from 'base64-arraybuffer';

import { supabase } from "@/src/Supabase/Config";

const bucketId = "storage";
const imageProcessing = async(fileUri:string)=>{
  const base64 = await FileSystem.readAsStringAsync(fileUri,{encoding:"base64"})
  console.log(decode(base64))
  return base64
}

export const supabaseCreateFile = async(requestData: {
  path: string;
  fileBody: string;
}) => {

  return supabase.storage
    .from(bucketId)
    .upload(requestData.path, await imageProcessing(requestData.fileBody), {
      contentType: "image/png",
    });
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
