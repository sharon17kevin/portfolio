interface Props {
  size: number
}

const LinkedIn = ({size}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
  >
    <path
      fill="#4B5563"
      d="M46.429 0H3.56C1.596 0 0 1.618 0 3.605v42.79C0 48.382 1.596 50 3.56 50H46.43C48.393 50 50 48.382 50 46.395V3.605C50 1.618 48.393 0 46.429 0ZM15.112 42.857H7.7V18.996h7.422v23.861h-.011Zm-3.706-27.12A4.299 4.299 0 0 1 7.11 11.44a4.299 4.299 0 0 1 4.297-4.297 4.306 4.306 0 0 1 4.297 4.297 4.292 4.292 0 0 1-4.297 4.297Zm31.485 27.12H35.48V31.25c0-2.768-.056-6.328-3.85-6.328-3.862 0-4.454 3.013-4.454 6.127v11.808h-7.41V18.996h7.109v3.259h.1c.994-1.875 3.416-3.851 7.02-3.851 7.5 0 8.896 4.944 8.896 11.373v13.08Z"
    />
  </svg>
)
export default LinkedIn
