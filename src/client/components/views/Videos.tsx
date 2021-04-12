import React, * as react from 'react';
import '../scss/about.scss';
import '../scss/navbar.scss';
import '../scss/videos.scss'

const videos = (props: videosProp) => {

    return(
      
        <React.Fragment> 
        <section id="Portfolio" className="content">
  
 
  <div className="container portfolio_title"> 
    
    
    <div className="section-title">
      <h2>Latest News</h2>
	<h6>See what their saying around the world</h6>
	  
    </div>
   
    
  </div>
 
  
  <div className="portfolio-top"></div>
  
 
  <div className="portfolio"></div> 
    
    <div id="filters" className="sixteen columns">
      <ul className="clearfix">
        <li><a id="all" href="#" data-filter="*" className="active">
          <h5>Home</h5>
          </a></li>
        <li><a className="" href="#" data-filter=".prototype">
          <h5>About</h5>
          </a></li>
        <li><a className="" href="#" data-filter=".design">
          <h5>Design</h5>
          </a></li>
        <li><a className="" href="#" data-filter=".android">
          <h5>Android</h5>
          </a></li>
        <li><a className="" href="#" data-filter=".appleIOS">
          <h5>Apple IOS</h5>
          </a></li>
        <li><a className="" href="#" data-filter=".web">
          <h5>Web App</h5>
          </a></li>
      </ul>
    </div>

    <div className="isotope fadeInLeft animated wow grid" style={{position: "relative", overflow: "hidden", height: "480px"}} id="portfolio_wrapper"> </div> 
     
      <figure  className="portfolio-item one-four videoCard  appleIOS isotope-item effect-oscar">
	   
        <div className="portfolio_img"> 
		<img src="img/portfolio_pic1.jpg"  alt="Portfolio 1"/>
			<figcaption>		
				<div>
				  <a href="img/portfolio_pic1.jpg" className="fancybox"> 
					<h2>Warm <span>Oscar</span></h2>
							<p>Oscar is a decent man. He used to clean porches with pleasure.</p>
				  </a>
				</div>
			</figcaption>
            </div>
        </figure>
     
      
      
      <figure className="portfolio-item one-four videoCard  design isotope-item effect-oscar">
        <div className="portfolio_img"> <img src="img/portfolio_pic2.jpg" alt="Portfolio 1"/>
        	<figcaption>		
				<div>
				  <a href="img/portfolio_pic2.jpg" className="fancybox"> 
					<h2>Warm <span>Oscar</span></h2>
							<p>Oscar is a decent man. He used to clean porches with pleasure.</p>
				  </a>
				</div>
			</figcaption>
            </div>
        </figure>
      
      
      
      <figure className="portfolio-item one-four videoCard  design  isotope-item effect-oscar">
        <div className="portfolio_img"> <img src="img/portfolio_pic3.jpg" alt="Portfolio 1"/> 
       <figcaption>		
				<div>
				  <a href="img/portfolio_pic3.jpg" className="fancybox"> 
					<h2>Warm <span>Oscar</span></h2>
							<p>Oscar is a decent man. He used to clean porches with pleasure.</p>
				  </a>
				</div>
			</figcaption>
            </div>
        </figure>
    
      
    
      <figure className="portfolio-item one-four videoCard  android  prototype web isotope-item effect-oscar">
        <div className="portfolio_img"> <img src="img/portfolio_pic4.jpg" alt="Portfolio 1"/> 
         <figcaption>		
				<div>
				  <a href="img/portfolio_pic4.jpg" className="fancybox"> 
					<h2>Warm <span>Oscar</span></h2>
							<p>Oscar is a decent man. He used to clean porches with pleasure.</p>
				  </a>
				</div>
			</figcaption>
            </div>
      </figure>
     
      
    
      <figure className="portfolio-item one-four videoCard design isotope-item effect-oscar">
        <div className="portfolio_img"> <img src="img/portfolio_pic5.jpg" alt="Portfolio 1"/>
         <figcaption>		
				<div>
				  <a href="img/portfolio_pic5.jpg" className="fancybox"> 
					<h2>Warm <span>Oscar</span></h2>
							<p>Oscar is a decent man. He used to clean porches with pleasure.</p>
				  </a>
				</div>
			</figcaption>
          </div>
      </figure>

      
   
      <figure className="portfolio-item one-four videoCard  web isotope-item effect-oscar">
        <div className="portfolio_img"> <img src="img/portfolio_pic6.jpg" alt="Portfolio 1"/>
       <figcaption>		
				<div>
				  <a href="img/portfolio_pic6.jpg" className="fancybox"> 
					<h2>Warm <span>Oscar</span></h2>
							<p>Oscar is a decent man. He used to clean porches with pleasure.</p>
				  </a>
				</div>
			</figcaption>
            </div>
      </figure>
      
      
     
      <figure className="portfolio-item one-four videoCard design web isotope-item effect-oscar">
        <div className="portfolio_img"> <img src="img/portfolio_pic7.jpg" alt="Portfolio 1"/>     
            <figcaption>		
				<div>
				  <a href="img/portfolio_pic7.jpg" className="fancybox"> 
					<h2>Warm <span>Oscar</span></h2>
							<p>Oscar is a decent man. He used to clean porches with pleasure.</p>
				  </a>
				</div>
			</figcaption>
        </div>    
        
            
       </figure>
      
      
     
      <figure className="portfolio-item one-four videoCard  android isotope-item effect-oscar">
        <div className="portfolio_img"> <img src="img/portfolio_pic8.jpg" alt="Portfolio 1"/>      
      <figcaption>		
				<div>
				  <a href="img/portfolio_pic8.jpg" className="fancybox"> 
					<h2>Warm <span>Oscar</span></h2>
							<p>Oscar is a decent man. He used to clean porches with pleasure.</p>
				  </a>
				</div>
			</figcaption>
      </div> 
        </figure>
     
      
    {/* </div>
    
    
  </div>
  */}
  
  
  <div className="portfolio_btm"></div>
  
  
  <div id="project_container">
    <div className="clear"></div>
    <div id="project_data"></div>
  </div>
 
  
</section>

</React.Fragment>




    )
};


interface videosProp{}
export default videos
