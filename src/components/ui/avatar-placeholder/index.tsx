const AvatarPlaceholder = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="avatar placeholder">
      <div className="rounded-full object-cover w-36 h-36 mx-auto border-2 border-gray-300">
        <span className="text-3xl">{placeholder}</span>
      </div>
    </div>
  );
};

export default AvatarPlaceholder;
