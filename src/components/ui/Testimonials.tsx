interface TestimonialsProps {
  image: string;
  name: string;
  children: string;
}

const Testimonials = ({ image, name, children }: TestimonialsProps) => {
  return (
    <div className="flex flex-col items-center bg-managelightgray text-center">
      <figure className="-mt-[2.28125rem]">
        <img className="m-auto" src={image} alt={name} width={73} height={73} />
        <figcaption className="py-4 font-semibold">{name}</figcaption>
      </figure>

      <p className="text px-6">{children}</p>
    </div>
  );
};

export default Testimonials;
