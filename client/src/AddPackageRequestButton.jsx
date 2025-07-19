function AddPackageRequestButton({ onClick }) {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      Add Package <i className="bi bi-plus"></i>
    </button>
  );
}

export default AddPackageRequestButton;
    