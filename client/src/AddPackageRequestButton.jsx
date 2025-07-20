function AddPackageRequestButton({ onClick, label = "Add Package" }) {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {label}
    </button>
  );
}

export default AddPackageRequestButton;
