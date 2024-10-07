import { useEffect, useState } from "react"

// Content is clean useEffect before callback
 
export function CleanUseEffect(){

    const [avatar, setAvatar] = useState();

    useEffect(()=>{

        //clean 
        return ()=>{
            avatar && URL.revokeObjectURL(avatar)
        }
    }, [avatar])

    const handleSetAvatar = (e) =>{
        console.log(e.target.files[0]);
        let file = e.target.files[0];
        file.preview = URL.createObjectURL(file);

        setAvatar(file.preview);
    }

    return (
        <div>
            <input type="file" onChange={handleSetAvatar}>
            </input>
            <br></br>
            {avatar && <img style={{width: 300, height: 300, borderRadius: 300, marginTop: 100}} src={avatar} title="avatar"></img>}
        </div>
    )
}