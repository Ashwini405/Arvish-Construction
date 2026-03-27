import HeroButton from "./HeroButton";

const HeroButtonGroup = ({ buttons = [] }) => {
  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {buttons.map((btn) => (
        <HeroButton
          key={btn.id}
          label={btn.label}
          primary={btn.primary}
          icon={btn.icon}
          onClick={btn.onClick}
        />
      ))}
    </div>
  );
};

export default HeroButtonGroup;
