// import AddProduct from "@/components/products/AddProduct";

import AddEmploye from "@/components/Employee/AddEmploye";

const AddEmployePage = () => {
  return (
    <div style={{ padding: 20, marginTop: 20 }}>
      <div
        style={{
          backgroundColor: "white",
          padding: "1vw",
          borderRadius: "8px",
          marginBottom: "1vw",
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}>
        <h3>Add Employee</h3>
      </div>
      <AddEmploye />
    </div>
  );
};

export default AddEmployePage;
