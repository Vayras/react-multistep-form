import { FormWrapper } from "../FormWrapper"

import { createClient } from '@supabase/supabase-js';
import React, { useState, useEffect } from 'react';

const supabaseUrl = 'https://nkkihvgbdiszvlklnfae.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ra2lodmdiZGlzenZsa2xuZmFlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTk0NTU4MiwiZXhwIjoyMDE1NTIxNTgyfQ.0OOmpxQrlEzKya_a7P6osCmaLgSzxJtiz9t73Xr70Wk';
const supabase = createClient(supabaseUrl, supabaseKey);



  

export function VideoUploadForm() {
    async function uploadFile() {
        setLoading(true)
        console.log("called")
        const fileInput = document.getElementById('videoFile');
        const file = fileInput.files[0]
    
        const { data, error } = await supabase.storage
          .from('VideoStorageBucket') // Replace with your storage bucket name
          .upload(`videos/${file.name}`, file);
      
        if (error) {
          console.error('Error uploading file:', error.message);
          
        } else {
          console.log('File uploaded successfully:');
        }
        setLoading(false)
      }
    const [loading, setLoading] = useState(true);

  return (
    <FormWrapper title="Video Upload">
      <label>Video Title</label>
      <input
        autoFocus
        required
        type="file"
        id="videoFile"
        accept="video/*"
      />
      <button type="button" onClick={uploadFile}>upload</button>
    </FormWrapper>
   
  )
}
