import React, { useEffect, useRef, useState } from "react";
import { auth } from "../firebase";

const PostInput = ({
  defaultValue = "",
  userName = "anonymous",
  userProfileImage = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
  onChange,
}) => {
  // logic
  const textareaRef = useRef(null);

  const currentUSer = auth.currentUser;
  const API_BASE_URL=process.env.REACT_APP_API_BASE_URL

  const [value, setValue] = useState(defaultValue);

  const hanldeChange = (event) => {
    const { value } = event.target;
    setValue(value);
    onChange(value);
  };

  // 진입시 딱 한번 실행
  useEffect(() => {
    textareaRef.current && textareaRef.current.focus();
    const length = value.length;
    textareaRef.current &&
      textareaRef.current.setSelectionRange(length, length);
  }, [value.length]);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  // view
  return (
    <div className="px-6 border-t border-churead-gray-300 border-opacity-15 pt-3">
      <div className="flex items-start gap-3">
        {/* START: 프로필 이미지 영역 */}
        <div className="w-10 rounded-full overflow-hidden mt-1">
          <img src={userProfileImage} alt="사용자 프로필 이미지" />
        </div>
        {/* END: 프로필 이미지 영역 */}
        {/* START: 콘텐츠 영역 */}
        <div className="w-full">
          <div className="flex items-center">
            <span className="font-bold">{userName}</span>
          </div>
          <div className="pt-1 text-sm">
            <textarea
              rows={4}
              placeholder="문구를 작성하세요"
              value={value}
              ref={textareaRef}
              className="w-full placeholder-churead-gray-300 placeholder-opacity-60 text-churead-gray-400 bg-transparent outline-none resize-none"
              onChange={hanldeChange}
            />
          </div>
        </div>
        {/* END: 콘텐츠 영역 */}
      </div>
    </div>
  );
};

export default PostInput;
