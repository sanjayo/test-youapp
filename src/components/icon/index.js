export const MyDefs = () => (
  <defs>
    <linearGradient
      id="colorGold"
      x1="-3.5"
      y1="14"
      x2="24.6814"
      y2="4.54055"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.0237305" stopColor="#94783E" />
      <stop offset="0.216904" stopColor="#F3EDA6" />
      <stop offset="0.329505" stopColor="#F8FAE5" />
      <stop offset="0.486109" stopColor="#FFE2BE" />
      <stop offset="0.723574" stopColor="#D5BE88" />
      <stop offset="0.809185" stopColor="#F8FAE5" />
      <stop offset="0.902849" stopColor="#D5BE88" />
    </linearGradient>
  </defs>
);

const customIcon = {
  iconEye: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="url(#colorGold)"
      fill="transparent"
      className="w-6 h-6"
    >
      <MyDefs />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  ),
  iconEyeCross: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="url(#colorGold)"
      fill="transparent"
      class="w-6 h-6"
    >
      <MyDefs />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  ),
  iconEdit: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.3925 2.54987L3.57708 8.70528C3.3575 8.93903 3.145 9.39945 3.1025 9.7182L2.84042 12.0132C2.74833 12.842 3.34333 13.4086 4.165 13.267L6.44583 12.8774C6.76458 12.8207 7.21083 12.587 7.43042 12.3461L13.2458 6.1907C14.2517 5.1282 14.705 3.91695 13.1396 2.43654C11.5812 0.970285 10.3983 1.48737 9.3925 2.54987Z"
        stroke="white"
        strokeWidth="1.0625"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.42208 3.57715C8.72667 5.53215 10.3133 7.02673 12.2825 7.22506"
        stroke="white"
        strokeWidth="1.0625"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.125 15.5833H14.875"
        stroke="white"
        strokeWidth="1.0625"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  iconPlus: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="url(#colorGold)"
      className="w-6 h-6"
    >
      <MyDefs />
      <path
        fillRule="evenodd"
        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

export default customIcon;
