'use client';

const Footer = () => {
	return (
		<section>
		<div className="card">
  <div className="date-time-container">
    <time className="date-time" dateTime="2022-10-10">
      <span>2022</span>
      <span className="separator"></span>
      <span>Oct 10</span>
    </time>
  </div>
  <div className="content">
  
    <div className="infos">
      <a href="#" className="title">
        <span className="title-span">
         How to make this blog card ?
        </span>
      </a>

      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
        Molestias explicabo corporis voluptatem?
      </p>
    </div>

      <a className="action" href="#">
        Read Blog
      </a>
  </div>
</div>
		</section>
	);
};

export default Footer;
