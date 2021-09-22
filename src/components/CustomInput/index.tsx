import React, { FC, memo } from 'react';
import { Input } from '@material-ui/core';
import { useStyles } from './styles';

interface ICustomInputProps {
  type: string;
  value: string;
  placeholder: string;
  onChange(e: React.SyntheticEvent): void;
  onBlur?(): void;
  className?: string;
}

const CustomInput: FC<ICustomInputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  onBlur,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Input
        className={classes.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        onBlur={onBlur}
      />
    </div>
  );
};

export default memo(CustomInput);
