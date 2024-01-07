import { FormEvent, useEffect, useState } from 'react';
import * as C from './App.styles';
import { PhotoItem } from './components/PhotoItem';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';

function App() {

  const [upload,setUpload] = useState(false);
  const [loading,setLoadinha] = useState(false);
  const [photos,setPhotos] = useState<Photo[]>([]);

  useEffect(() =>{
    const getPhotos = async() =>{
      setLoadinha(true);
      setPhotos(await Photos.getAll());

      setLoadinha(false);
    }
    getPhotos();
  },[]);

  const handleFormSubmit = async (e:FormEvent<HTMLFormElement>) =>{

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if(file && file.size > 0){
      setUpload(true);

      let result = await Photos.insert(file);

      setUpload(false);

      if(result instanceof Error){
        alert(result.message);
      }else{
        let newPhotolist = [...photos];
        newPhotolist.push(result);
        setPhotos(newPhotolist);
      }

    }
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Photo gallery</C.Header>

        <C.UploadForm method="POST" onSubmit={handleFormSubmit} >
       <input type="file" name="image" id="" />
       <input type="submit" value="Submit" />
       {upload && "Loading..."}
        </C.UploadForm>

        {loading && 
        <C.ScreenWarnig>
          <div className="emoji">😀</div>
          <div>Loading</div>
          </C.ScreenWarnig>
          }



          {!loading && photos.length > 0 && 
          <C.PhotoList>
            {photos.map((item,index)=>( 
            <PhotoItem key={index} url={item.url} name={item.name} />))}
            </C.PhotoList>}

            {!loading && photos.length === 0 &&
            <C.ScreenWarnig>
              <div className="emoji">😩</div>
          <div>there are no photos registered</div>
              </C.ScreenWarnig>}

      </C.Area>
    </C.Container>
  );
}

export default App;
