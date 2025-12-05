const CameraDetails = ({ camera }) => {
  if (!camera) return null;

  return (
    <div className="bg-gray-100 p-4 rounded-xl mt-6">
      <h3 className="text-xl font-semibold mb-3">Camera Information</h3>

      <ul className="space-y-2 text-gray-700">
        <li><strong>Model:</strong> {camera.camera_model || "N/A"}</li>
        <li><strong>Brand:</strong> {camera.camera_brand || "N/A"}</li>
        <li><strong>Lens:</strong> {camera.lens || "N/A"}</li>
        <li><strong>Aperture:</strong> {camera.settings.aperture}</li>
        <li><strong>Shutter Speed:</strong> {camera.settings.shutter_speed}</li>
        <li><strong>ISO:</strong> {camera.settings.iso}</li>
      </ul>
    </div>
  );
};

export default CameraDetails;
