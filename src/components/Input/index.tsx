import React, {
  useEffect,
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inpurRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inpurRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInpurFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setHasContent(!!inpurRef.current?.value);
  }, []);

  return (
    <>
      <Container hasContent={hasContent} isFocused={isFocused}>
        {Icon && <Icon size={20} />}
        <input
          onFocus={handleInpurFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inpurRef}
          {...rest}
        />
      </Container>
      {error && <span>{error}</span>}
    </>
  );
};

export default Input;
