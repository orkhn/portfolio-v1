import styled, { css } from 'styled-components';
import Link from 'next/link';

export const Navbar = styled.nav`
  z-index: 2;
  display: none;
  width: 92%;
  height: 6rem;
  padding: 1rem 2rem;
  position: fixed;
  transition: opacity 1s;
  background-color: #232320;
  border-radius: 2rem;

  bottom: 1.3rem;
  left: 50%;
  transform: translate(-50%);

  @media (max-width: 37.5em) {
    display: flex;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  width: 90%;
  margin: 0 5rem 0 0;
`;

export const LinkWrapper = styled.li``;

const StyledLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

export const NavLink = styled(StyledLink)`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const Icon = styled.img`
  height: 2.5rem;
  width: 2.5rem;

  :last-child {
    margin-left: -2.5rem;
  }
`;

export const HomeIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.1914 13.0486L29.1892 13.0463L16.9515 0.809099C16.4299 0.287247 15.7364 0 14.9987 0C14.261 0 13.5675 0.287247 13.0456 0.809099L0.814394 13.0401C0.810274 13.0442 0.805925 13.0486 0.802034 13.0527C-0.269135 14.13 -0.267304 15.878 0.807299 16.9526C1.29825 17.4438 1.94645 17.7281 2.63973 17.7581C2.66811 17.7608 2.69649 17.7622 2.7251 17.7622H3.21262V26.7678C3.21262 28.5501 4.66282 30.0001 6.44513 30.0001H11.2329C11.7183 30.0001 12.1118 29.6064 12.1118 29.1212V22.0606C12.1118 21.2474 12.7735 20.5859 13.5867 20.5859H16.4107C17.2239 20.5859 17.8853 21.2474 17.8853 22.0606V29.1212C17.8853 29.6064 18.2788 30.0001 18.7643 30.0001H23.552C25.3346 30.0001 26.7845 28.5501 26.7845 26.7678V17.7622H27.2368C27.9743 17.7622 28.6678 17.4749 29.1898 16.9529C30.2656 15.8766 30.2661 14.1255 29.1914 13.0486ZM27.9468 15.71C27.757 15.8998 27.5048 16.0044 27.2368 16.0044H25.9056C25.4202 16.0044 25.0267 16.3978 25.0267 16.8833V26.7678C25.0267 27.5808 24.3652 28.2422 23.552 28.2422H19.6432V22.0606C19.6432 20.2783 18.1932 18.8281 16.4107 18.8281H13.5867C11.8042 18.8281 10.354 20.2783 10.354 22.0606V28.2422H6.44513C5.63214 28.2422 4.97044 27.5808 4.97044 26.7678V16.8833C4.97044 16.3978 4.57699 16.0044 4.09153 16.0044H2.78324C2.76951 16.0035 2.756 16.0028 2.74204 16.0025C2.4802 15.998 2.23461 15.894 2.05059 15.7098C1.6592 15.3184 1.6592 14.6814 2.05059 14.2898L2.05173 14.2887L14.2889 2.05193C14.4784 1.86219 14.7304 1.75782 14.9987 1.75782C15.2667 1.75782 15.5187 1.86219 15.7085 2.05193L27.9429 14.2861C27.9447 14.288 27.9468 14.2898 27.9486 14.2916C28.3379 14.6837 28.3373 15.3193 27.9468 15.71Z"
        fill="white"
      />
    </svg>
  );
};

export const ProjectsIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.9997 17.5C34.9997 17.3834 34.9658 17.2695 34.9026 17.1729C34.8393 17.0763 34.7495 17.0016 34.6448 16.9582L23.9594 12.5417L34.6448 8.1251C34.7496 8.08186 34.8395 8.00712 34.9028 7.91054C34.9662 7.81397 35 7.69999 35 7.58333C35 7.46668 34.9662 7.3527 34.9028 7.25612C34.8395 7.15954 34.7496 7.08481 34.6448 7.04156L17.7096 0.0415605C17.575 -0.0138535 17.425 -0.0138535 17.2904 0.0415605L0.35524 7.04156C0.250391 7.08481 0.160499 7.15954 0.0971737 7.25612C0.0338486 7.3527 0 7.46668 0 7.58333C0 7.69999 0.0338486 7.81397 0.0971737 7.91054C0.160499 8.00712 0.250391 8.08186 0.35524 8.1251L11.0406 12.5417L0.35524 16.9582C0.250391 17.0015 0.160499 17.0762 0.0971737 17.1728C0.0338486 17.2694 0 17.3833 0 17.5C0 17.6167 0.0338486 17.7306 0.0971737 17.8272C0.160499 17.9238 0.250391 17.9985 0.35524 18.0418L11.0406 22.4583L0.35524 26.8749C0.250391 26.9181 0.160499 26.9929 0.0971737 27.0895C0.0338486 27.186 0 27.3 0 27.4167C0 27.5333 0.0338486 27.6473 0.0971737 27.7439C0.160499 27.8405 0.250391 27.9152 0.35524 27.9584L17.2904 34.9584C17.425 35.0139 17.575 35.0139 17.7096 34.9584L34.6448 27.9584C34.7496 27.9152 34.8395 27.8405 34.9028 27.7439C34.9662 27.6473 35 27.5333 35 27.4167C35 27.3 34.9662 27.186 34.9028 27.0895C34.8395 26.9929 34.7496 26.9181 34.6448 26.8749L23.9594 22.4583L34.6448 18.0418C34.7495 17.9984 34.8393 17.9237 34.9026 17.8271C34.9658 17.7305 34.9997 17.6166 34.9997 17.5ZM2.08475 7.58333L17.5 1.21187L32.9153 7.58333L17.5 13.9548L2.08475 7.58333ZM32.9153 27.4167L17.5 33.7881L2.08475 27.4167L12.5606 23.0869L17.2904 25.0418C17.425 25.0972 17.575 25.0972 17.7096 25.0418L22.4394 23.0869L32.9153 27.4167ZM17.5 23.8715L2.08475 17.5L12.5606 13.1702L17.2904 15.1251C17.425 15.1805 17.575 15.1805 17.7096 15.1251L22.4394 13.1702L32.9153 17.5L17.5 23.8715Z"
        fill="white"
      />
    </svg>
  );
};
export const AboutMeIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9294 4C14.6548 4 12 6.65477 12 9.92942C12 13.2041 14.6548 15.8588 17.9294 15.8588C21.2041 15.8588 23.8588 13.2041 23.8588 9.92942C23.8549 6.65627 21.2026 4.00389 17.9294 4ZM17.9294 14.3249C15.502 14.3249 13.534 12.3568 13.534 9.92942C13.534 7.50175 15.502 5.53396 17.9294 5.53396C20.3571 5.53396 22.3249 7.50175 22.3249 9.92942C22.3222 12.3559 20.3559 14.3222 17.9294 14.3249Z"
        fill="white"
      />
      <path
        d="M17.4877 6.39674e-05C10.4147 6.39674e-05 4.03825 4.2607 1.33164 10.7953C-1.37496 17.3296 0.120954 24.8511 5.12221 29.8527C9.53684 34.2856 15.9834 36.0224 22.0275 34.4072C28.0717 32.7924 32.7925 28.0713 34.4077 22.0274C36.0225 15.9832 34.2857 9.53669 29.8528 5.12206C26.5806 1.83183 22.1279 -0.0125193 17.4877 6.39674e-05ZM8.03464 30.3297V28.8164C8.03464 23.5958 12.2668 19.3633 17.4877 19.3633C22.7085 19.3633 26.9407 23.5958 26.9407 28.8164V30.3297C21.3211 34.4773 13.6543 34.4773 8.03464 30.3297ZM28.4747 29.0438V28.8164C28.4747 22.7584 23.5459 17.8297 17.4877 17.8297C11.4294 17.8297 6.50067 22.7584 6.50067 28.8164V29.0438C3.32819 26.0373 1.53208 21.8581 1.53447 17.4872C1.53447 8.69061 8.69106 1.53403 17.4877 1.53403C26.2843 1.53403 33.4409 8.69061 33.4409 17.4872C33.443 21.8581 31.6472 26.0373 28.4744 29.0438H28.4747Z"
        fill="white"
      />
    </svg>
  );
};
