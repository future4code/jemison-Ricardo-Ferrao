/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {useState} from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';

import MessageItem from './MessageItem';

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';


export default ({user}) => {

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [list, setList] = useState([
        {author:123, body: 'Bla Bla Bla'},
        {author:123, body: 'Bla Bla Bla Bla Bla Bla'},
        {author:1234, body: 'Bla Bla Bla Bla Bla'},
    ]);


     
    const handleEmojiClick = (e, emojiObject) => {
       setText(text + emojiObject.emoji);
    }


    const handleOpenEmoji = () => {
        setEmojiOpen(true);

    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false);

    }



    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                   <img className="chatWindow--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt=""/> 
                   <div className="chatWindow--name">Ricardo Ferrão</div>
                </div>
                    <div className="chatWindow--headerbuttons">
                        <div className="chatWindow--bnt">
                            <SearchIcon style={{color: '#919191'}}/>
                        </div>
                        <div className="chatWindow--bnt">
                            <AttachFileIcon style={{color: '#919191'}}/>
                        </div>
                        <div className="chatWindow--bnt">
                            <MoreVertIcon style={{color: '#919191'}}/>
                        </div>
                    </div>
            </div>

            <div className="chatWindow--body">
                {list.map((item, key) => (
                    <MessageItem
                        key={key}
                        data={item}
                        user={user}
                        
                        />

                ))}
            </div>

            
            <div className="chatWindow--emojiarea" 
                style={{height: emojiOpen ? '200px' : '0px'}}>
                    <EmojiPicker 
                        onEmojiClick={handleEmojiClick}
                        disableSearchBar
                        disableSkinTonePicker

                
                />
                
            </div>


            <div className="chatWindow--footer">
                <div className="chatWindow--pre">

                    <div className="chatWindow--bnt"
                        onClick={handleCloseEmoji}
//                        style={{width: emojiOpen?40:0}}
                    >
                        <CloseIcon style={{color: '#919191'}}/>
                    </div>

                    <div className="chatWindow--bnt" 
                        onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{color: '#919191'}}/>
                    </div>
                
                </div>
                <div className="chatWindow--inputarea">
                    <input 
                        className="chatWindow--input" 
                        type="text" 
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />  


                
                </div>
                <div className="chatWindow--pos">
                    
                    <div className="chatWindow--bnt">
                        <MicIcon style={{color: '#919191'}}/>
                    </div>

                    <div className="chatWindow--bnt">
                        <SendIcon style={{color: '#919191'}}/>
                    </div>


               
                
                </div>

            </div>

            
        </div>
    )
}