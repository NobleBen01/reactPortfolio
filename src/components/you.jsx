import React from "react";
import { Button } from "react-bootstrap";
import youImage from "../images/youImage.jpg";

function You() {
  return (
    <section className="text-center p-b px-5 row bg-h text-white">
      <h1 className="my-5 col-md-12">Why Hire Me ?</h1>
      <div className="my-3 col-md-5">
        <img src={youImage} alt="" height="" className="rounded-circle img-h" />
      </div>
      <div className="col-md-5 my-5">
        <p>
          {/* Are you looking for someone with a persistent mindset, aims towards
          implementing your ideas, design needs and deliver top quality products
          that will meet your expectation ? Then I might be the right fit for
          the job. I have a persistent mindset and I aim towards customer
          satisfaction. if this sound like the profile your looking for then get
          in touch so we can get started on your */}
          As much as the skill is vital, a lot of work ethics are required to 
          successfully create and implement any program. If you're interested in 
          working with a team player, who is detail-oriented and adaptable to the consistent 
          changes in codes, frameworks and other tools, then I might just be the right guy 
          for the job. Get in touch.
        </p>
        <Button href="#contact" className="btn-dark">
          GET STARTED
        </Button>
      </div>
    </section>
  );
}

export default You;
