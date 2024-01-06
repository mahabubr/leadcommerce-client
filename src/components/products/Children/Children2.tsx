import { Avatar, List } from "antd";

const reviewsData = [
  {
    title: "Amazing Product!",
    description: "This product exceeded my expectations. Highly recommended!",
  },
  {
    title: "Great Value for Money",
    description:
      "Affordable and high quality. I'm very satisfied with my purchase.",
  },
  {
    title: "Excellent Build Quality",
    description: "Sturdy and well-made. Definitely worth the investment.",
  },
  {
    title: "Impressive Design",
    description:
      "Sleek and modern design. Adds a touch of elegance to any space.",
  },
  {
    title: "Fantastic Customer Service",
    description:
      "The customer support team was extremely helpful and responsive.",
  },
  {
    title: "Easy to Use",
    description: "Intuitive and user-friendly. I had no trouble setting it up.",
  },
  {
    title: "Fast Shipping",
    description:
      "Received the product sooner than expected. Kudos to the shipping team!",
  },
  {
    title: "Highly Versatile",
    description:
      "Adaptable to various needs. It's multifunctional and practical.",
  },
  {
    title: "Impressive Performance",
    description: "Works like a charm. Delivers exceptional performance.",
  },
  {
    title: "Satisfied Customer",
    description:
      "Overall, I'm very pleased with this product. Would buy again!",
  },
];

const Children1: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={reviewsData}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar
              src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
            />
          }
          title={item.title}
          description={item.description}
        />
      </List.Item>
    )}
  />
);

export default Children1;
