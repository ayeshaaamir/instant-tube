import Button from "./Button";

const ButtonList = () => {
  const btnList = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Valentines",
    "Tournament",
    "History",
    "Travel",
  ];
  return (
    <div className="flex">
      {btnList.map((btn) => (
        <Button key={btn} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
