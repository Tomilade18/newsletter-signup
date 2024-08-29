export default function Success() {
    
    return( 
        <div className="success">
        <img src="./icon-success.svg" className="suc-img" alt="" />
        <h1 className="suc-head">Thanks for subscribing</h1>
        <p className="suc-text">A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription</p>
        <button className="dismiss-btn"><a href="/">Dismiss Message</a></button>
        </div>
    )
}