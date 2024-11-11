/* eslint-disable react/prop-types */
import Icon from "./Icon";

export function ArrowRight() {
  return (
    <Icon>
      <path
        d="M4 12H20M20 12L16 8M20 12L16 16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function LoveIcon() {
  return (
    <Icon>
      <path
        d="M12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5"
        stroke="#000"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M12 5.50063C16.4998 0.825464 22 4.27416 22 9.1371C22 14 17.9806 16.5914 15.0383 18.9109C14 19.7294 13 20.5 12 20.5"
        stroke="#000"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </Icon>
  );
}

export function ViewIcon() {
  return (
    <Icon>
      <path
        d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
        stroke="#000"
        strokeWidth="1"
      />
      <path
        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        stroke="#000"
        strokeWidth="1"
      />
    </Icon>
  );
}

export function AddToCartIcon({ deals }) {
  return (
    <Icon width={deals ? 28 : 32}>
      <path
        d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6"
        stroke="#000"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M9.1709 15C9.58273 16.1652 10.694 17 12.0002 17C13.3064 17 14.4177 16.1652 14.8295 15"
        stroke="#000"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M20.2235 12.5257C19.6382 9.40452 19.3456 7.84393 18.2347 6.92196C17.1238 6 15.5361 6 12.3605 6H11.6393C8.46374 6 6.87596 6 5.76506 6.92196C4.65416 7.84393 4.36155 9.40452 3.77633 12.5257C2.9534 16.9146 2.54194 19.1091 3.74157 20.5545C4.94119 22 7.17389 22 11.6393 22H12.3605C16.8259 22 19.0586 22 20.2582 20.5545C20.9542 19.7159 21.1079 18.6252 20.9536 17"
        stroke="#000"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </Icon>
  );
}

export function ContactIcon() {
  return (
    <Icon width={25}>
      <path
        d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
        stroke="#000"
        strokeWidth="1"
        strokeMiterlimit="10"
      />
      <path
        d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5"
        stroke="#000"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 9C22 5.13 18.87 2 15 2"
        stroke="#000"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function LocationIcon() {
  return (
    <Icon width={16}>
      <path
        d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
        stroke="#000000"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
        stroke="#000000"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function CommentsIcon() {
  return (
    <Icon width={20}>
      <path
        d="M10.5238 14.2728L9.48206 16.0087C9.43209 16.092 9.36139 16.1609 9.27687 16.2088C9.19234 16.2566 9.09686 16.2818 8.99972 16.2818C8.90258 16.2818 8.8071 16.2566 8.72257 16.2088C8.63804 16.1609 8.56735 16.092 8.51738 16.0087L7.47675 14.2728C7.42671 14.1895 7.35596 14.1206 7.27138 14.0728C7.1868 14.025 7.09128 13.9999 6.99413 14H2.8125C2.66332 14 2.52024 13.9407 2.41475 13.8352C2.30926 13.7298 2.25 13.5867 2.25 13.4375V4.4375C2.25 4.28832 2.30926 4.14524 2.41475 4.03975C2.52024 3.93426 2.66332 3.875 2.8125 3.875H15.1875C15.3367 3.875 15.4798 3.93426 15.5852 4.03975C15.6907 4.14524 15.75 4.28832 15.75 4.4375V13.4375C15.75 13.5867 15.6907 13.7298 15.5852 13.8352C15.4798 13.9407 15.3367 14 15.1875 14H11.0059C10.9088 14 10.8134 14.0252 10.7289 14.073C10.6445 14.1208 10.5738 14.1896 10.5238 14.2728V14.2728Z"
        stroke="gray"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function TagIcon() {
  return (
    <Icon width={20}>
      <path
        d="M12.32 19.98C11.74 19.98 11.16 19.76 10.72 19.32L4.24 12.85C4.1 12.71 4.02 12.52 4.02 12.32V4.77002C4.02 4.36002 4.36 4.02002 4.77 4.02002H12.31C12.51 4.02002 12.7 4.10002 12.84 4.24002L19.32 10.72C20.19 11.6 20.19 13.03 19.32 13.91L13.91 19.32C13.47 19.76 12.89 19.98 12.31 19.98H12.32ZM5.52 12.01L11.78 18.26C12.08 18.55 12.56 18.55 12.85 18.26L18.26 12.85C18.55 12.56 18.55 12.08 18.26 11.78L12 5.52002H5.52V12V12.01ZM8.5 9.75002C7.81 9.75002 7.25 9.19002 7.25 8.50002C7.25 7.81002 7.81 7.25002 8.5 7.25002C9.19 7.25002 9.75 7.81002 9.75 8.50002C9.75 9.19002 9.19 9.75002 8.5 9.75002Z"
        fill="gray"
      />
    </Icon>
  );
}

export function PersonIcon() {
  return (
    <Icon width={20}>
      <path
        d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z"
        stroke="gray"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z"
        stroke="gray"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}