function FormSubmit(event) {
    event.preventDefault();
  console.log("Form Submitted!!!");
}

export default function Form() {
  return (
    <form>
      <input placeholder="Write an placeholder..." />
      <button onClick={FormSubmit}>Submit</button>
    </form>
  );
}
