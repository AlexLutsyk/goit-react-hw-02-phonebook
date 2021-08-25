export default function Filter({ value, onChange }) {
  return (
    <div>
      <label>
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
}
