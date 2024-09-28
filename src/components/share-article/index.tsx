import { useEffect, useState } from "react";
import { FacebookShareButton, FacebookIcon, XIcon, TwitterShareButton, LinkedinShareButton, LinkedinIcon } from "react-share";
import { Articles } from "./articleBase";
import style from "./style.module.scss"




export default function ShareArticle() {

    const article = Math.floor(Math.random() * 4) + 1;
    const [url, setUrl] = useState("");
    const articleUrl = Articles[article].url;

    const CopyToClipboardButton = ({ content }: any) => {
        const handleCopy = (e: any) => {
            try {
                document.execCommand('copy');
                console.log('Copied to clipboard:', content);
                e.target.innerText = 'Copied';
                setTimeout(() => { e.target.innerText = 'Copy' }, 5000)
            } catch (error) {
                console.error('Unable to copy to clipboard:', error);
            }
        };

        return (
            <button className={style.buttonCopy} onClick={(e) => { handleCopy(e) }} >Copy</button>
        );
    };

    useEffect(() => {
        setUrl(articleUrl);
    }, [articleUrl]);

    return <div className={style.share}>
        <p>
            {url}
            <CopyToClipboardButton content={url} />
        </p>
        <div className={style.icons}>
            <FacebookShareButton
                url={url}
            >
                <FacebookIcon />
            </FacebookShareButton>

            <TwitterShareButton
                url={url}>
                <XIcon />
            </TwitterShareButton>

            <LinkedinShareButton
                url={url}>
                <LinkedinIcon />
            </LinkedinShareButton>
        </div>
    </div>;
}


