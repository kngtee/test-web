interface Props {
  title: string;
  subtitle: string;
  description: string;
}
const Hero: React.FC<Props> = ({ title, description, subtitle }) => {
  return (
    <section className="pt-[60px] 2xl:h-[800px] bg-[#FBF9F9]">
      <div className="container items-center justify-center">
        <h1 className="heading">{title}</h1>
        <h1 className="heading text-primaryColor">{subtitle}</h1>
        <p className="text__para">{description}</p>
      </div>
    </section>
  );
};

export default Hero;
