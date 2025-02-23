interface Props {
  width: number;
  height: number;
}

const Medium = ({width, height}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <path
      fill="#4B5563"
      d="M22.28 0C9.976 0 0 11.193 0 25s9.976 25 22.28 25c12.305 0 22.28-11.193 22.28-25S34.587 0 22.28 0Zm35.581 1.464c-6.152 0-11.14 10.54-11.14 23.536 0 12.997 4.988 23.537 11.141 23.537S69.002 37.997 69.002 25c0-13-4.987-23.536-11.14-23.536Zm17.22 2.452c-2.163 0-3.917 9.44-3.917 21.084s1.753 21.085 3.918 21.085C77.246 46.085 79 36.642 79 25c0-11.644-1.755-21.084-3.918-21.084Z"
    />
  </svg>
)
export default Medium
