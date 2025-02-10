import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import partnersData from '../dashboard/data'

const SurveyIframe = ({}) => {
    const [iframeURL, setIframeURL] = useState('')

    const {id} = useParams()
    const auth  =  JSON.parse(localStorage.getItem('opinionUser'))

    useEffect(() => {
        const partnerIframe = partnersData?.partners?.find((item)=> item.id == id)
        if(partnerIframe){
            setIframeURL(partnerIframe?.iframeUrl)
        }
    }, [iframeURL])
    useEffect(()=> {
         window.scrollTo({ top: 0, behavior: "smooth" });
    },[])
    
    return (
        <div className="md:p-6 p-4">  
        <div id="iframe-container">
            <iframe title="OpinionUniverse Offer Wall" allow="clipboard-write" src={iframeURL} width="100%" height="1000px" style={{border:"0", padding:"0", scrolling:"auto", margin:"0"}}></iframe>
        </div>
        </div>
    );
}

export default SurveyIframe;