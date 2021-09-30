import Card from "@material-ui/core/Card";
import DetailsText from "./DetailsText";
import useStyles from "./DetailsCardStyle";

const DetailsCard = (props) => {
  const classes = useStyles();
  const { name, username, email, phone, company, website, address } =
    props.user;

  const ulList = (
    <ul className={classes.ulStyle}>
      <li>
        <DetailsText text={`street: ${address.street}`} />
      </li>
      <li>
        <DetailsText text={`suite: ${address.suite}`} />
      </li>
      <li>
        <DetailsText text={`city: ${address.city}`} />
      </li>
      <li>
        <DetailsText text={`zipcode: ${address.zipcode}`} />
      </li>
    </ul>
  );

  return (
    <Card className={classes.root}>
      <DetailsText text={`- name: ${name}`} />
      <DetailsText text={`- username: ${username}`} />
      <DetailsText text={`- email: ${email}`} />
      <DetailsText text={`- phone: ${phone}`} />
      <DetailsText text={`- company: ${company.name}`} />
      <DetailsText text={`- website: ${website}`} />
      <DetailsText text={`- address: `} />
      {ulList}
    </Card>
  );
};
export default DetailsCard;
