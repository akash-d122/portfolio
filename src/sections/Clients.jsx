import { testimonials } from '../constants/index.js';

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Testimonials</h3>

      <div className="client-container">
        {testimonials.map((testimonial) => (
          <div key={`testimonial-${testimonial.id}`} className="client-review">
            <div>
              <p className="text-white-800 font-light">{testimonial.content}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{testimonial.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">{testimonial.position}</p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
