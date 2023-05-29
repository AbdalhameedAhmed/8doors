import { useRef, useEffect } from 'react';

interface OtpInputProps {
  length: number;
  onChange: (otp: string) => void;
  inputStyle?:string
}

export default function OtpInput({ length, onChange,inputStyle }: OtpInputProps) {
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const handleChange = (index: number, value: string) => {
    const otp = inputsRef.current
      .map(input => input.value)
      .join('')
      .slice(0, length);
    onChange(otp);
    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };
  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && !inputsRef.current[index].value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };
  useEffect(() => {
    inputsRef.current[0].focus();
  }, []);
  return (
    <>
      {[...Array(length)].map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          className={inputStyle}
          ref={ref => inputsRef.current[index] = ref}
          onChange={event => handleChange(index, event.target.value)}
          onKeyDown={event => handleKeyDown(index, event)}

        />
      ))}

    </>
  );
}