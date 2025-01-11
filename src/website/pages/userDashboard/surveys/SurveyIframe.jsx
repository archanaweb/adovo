const SurveyIframe = ({}) => {
    return (
        <div id="iframe-container" style={{ marginTop: "20px" }}>
            <iframe title="OpinionUniverse Offer Wall" allow="clipboard-write" src="https://opinionuniverse.com/offerwall.php?pubid=3&sid=[USER_ID]&app_id=ID_666aaea5254cd1.79214671&apikey=[apikey]" width="100%" height="1000px" style={{border:"0", padding:"0", scrolling:"auto", margin:"0"}}></iframe>
        </div>
    );
}

export default SurveyIframe;