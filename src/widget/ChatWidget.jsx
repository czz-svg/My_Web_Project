import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import "./ChatWidget.css"

export default function ChatWidget(){
    const [open,setOpen] = useState(false)
    const [text,setText] = useState()
    const [msgs,setMsgs] =useState([{who:"bot",text:"chào bạn 👋 mình là chat bot!"}])
    const listRef = useRef()
    useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight; //<----------
  }, [open, msgs.length]);
    function removeVietnameseTones(str) {
  return str
    .normalize("NFD")               // tách ký tự và dấu
    .replace(/[\u0300-\u036f]/g, "")// xóa dấu
    .replace(/đ/g, "d")             // thay đ
    .replace(/Đ/g, "D");            // thay Đ
}
    function handleClick(){
        const t = text.trim();
        setMsgs(m=>[...m,{who:"user",text:t}])
        console.log(removeVietnameseTones(t));
        
        // giả lập rep
        const t2 = removeVietnameseTones(t)
        if(t2.includes("lam gi")|| t2.includes("lam dc gi")|| t2.includes("lam duoc gi")){
            setTimeout(()=>{
            setMsgs(m=>[...m,{who:"bot",text:`mình không làm được gì hết ☺️`}])
        },1000)
        setTimeout(()=>{
            setMsgs(m=>[...m,{who:"bot",text:`sao bạn không tham quan trang web đi ☺️`}])
        },2000)
        
        }else if(/hello|hi|xin chao|halo/.test(t2)){
            setTimeout(()=>{
            setMsgs(m=>[...m,{who:"bot",text:` halo~ friend 🤓`}])
        },1000)
        } else{
            setTimeout(()=>{
            setMsgs(m=>[...m,{who:"bot",text:`mình thể chưa xử lý được yêu cầu "${t}" của bạn 😢 sao bạn không hỏi mình có thể làm được gì không 🤓`}],)
        },1000)
        }
        //
        setText("");
    }
    const ui = (
        <div className="cw-root">

            {!open&&<p className="first-halo" inert>halo! click me</p>}            
            <button className="cw-fab"
                onClick={()=>{setOpen(pre=>!pre)}}
                title={open?"close chat":"open chat"}
            >
                {open?"x":<img src="./img/widget/chat-bot.png" alt="💬"/>}
            </button>
            <div className={`cw-panel ${open?"cw-open":""}`}>
                <div className="cw-header">
                    <div className="cw-title">
                       <img className="chat-bot-avatar" src="./img/widget/chat-bot.png"/>  Chat Bot
                    </div>
                    <button className="cw-close-btn" onClick={()=>{setOpen(pre=>!pre)}}>
                        x
                    </button>
                </div>
                <div className="cw-list" ref={listRef}>
                    {msgs.map((m,i)=>(
                        <>                    
                        <div key={i} className={`cw-msgs ${m.who=== "user"?"cw-user":"cw-bot"}`}>
                            {m.who=== "bot"&& <img className="chat-bot-avatar" src="./img/widget/chat-bot.png"/>} {m.text}
                        </div>

                        </>
                    ))}

                </div>
                <div className="cw-input" onKeyDown={(e)=>{e.key==="Enter"&&handleClick()}}>
                    <input value={text} onChange={(e)=>{setText(e.target.value)}} type="text" placeholder="enter messages"/>
                    <button onClick={handleClick}>
                        send
                    </button>
                </div>
            </div>
        </div>
    )

    return createPortal(ui, document.body)
        
}