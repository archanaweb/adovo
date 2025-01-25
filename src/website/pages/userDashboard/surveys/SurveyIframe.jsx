const SurveyIframe = ({}) => {
    const auth  =  JSON.parse(localStorage.getItem('opinionUser'))
    
    return (
        <div className="md:p-6 p-4">
        <div id="iframe-container" style={{ marginTop: "20px" }}>
            <iframe title="OpinionUniverse Offer Wall" allow="clipboard-write" src={`https://opinionuniverse.com/offerwall.php?pubid=3&sid=${auth.id}&app_id=ID_6794b8bce87212.96962909&apikey=[apikey]`} width="100%" height="1000px" style={{border:"0", padding:"0", scrolling:"auto", margin:"0"}}></iframe>
        </div>
        </div>
    );
}

export default SurveyIframe;