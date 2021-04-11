import Form from "react-bootstrap/Form";

const Forms = ({
  handleCategorySelection,
  handlePaginationSelection,
  categories,
}) => {
  return (
    <div className="col col-lg-2 mx-4 my-4">
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label className="font-weight-bold mb-3">
          Films par page
        </Form.Label>
        <Form.Control as="select" onChange={handlePaginationSelection}>
          <option>12</option>
          <option>8</option>
          <option>4</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label className="font-weight-bold my-3">Catégorie</Form.Label>
        <Form.Control as="select" onChange={handleCategorySelection}>
          <option>Toutes Catégories</option>
          {categories.map((category) => {
            return <option key={category.id}>{category}</option>;
          })}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Forms;
