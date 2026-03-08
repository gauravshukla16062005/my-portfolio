import profile from "../assets/images/profile.jpg";

function ProfileImage() {
  return (
    <div className="flex justify-center md:justify-end">
      <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-gray-700 bg-gray-900 shadow-xl">
        <img
          src={profile}
          alt="Abhishek Shukla"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ProfileImage;