import { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { motion, AnimatePresence } from "framer-motion";
import { Grid } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import * as React from "react";

const Container = styled("div")(() => ({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
}));

const SelectInput = styled(InputBase)(({ theme }) => ({
  color: theme.palette.primary.main,
  borderBottom: "1px solid #707070",
  paddingLeft: theme.spacing(2),
  "&.MuiInputBase-root": {
    cursor: "pointer",
  },
}));

const DropdownContainer = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  zIndex: 1,
  width: "100%",
  top: "100%",
  left: 0,
  boxShadow: "0px 3px 6px #00000029",
  backgroundColor: theme.palette.background.paper,
  padding: 2,
}));

const SelectItem = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(1),
  color: theme.palette.primary.main,
  fontSize: 12,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

interface CustomSelectProps {
  items: string[];
  onSelect?: (item: string) => void;
  defaultValue: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  items,
  onSelect,
  defaultValue,
}: {
  items: string[];
  onSelect?: (item: string) => void;
  defaultValue: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultValue);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <Container ref={containerRef}>
      <SelectInput
        value={selectedItem}
        onClick={handleToggle}
        readOnly
        endAdornment={
          <IconButton>
            <KeyboardArrowDownRoundedIcon />
          </IconButton>
        }
      />

      <AnimatePresence>
        {isOpen && (
          <DropdownContainer
            initial={{ opacity: 0, scaleY: 0.8 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.8 }}
          >
            <Grid container>
              {items.map((item) => (
                <Grid item key={item} md={4}>
                  <SelectItem onClick={() => handleItemClick(item)}>
                    {item}
                  </SelectItem>
                </Grid>
              ))}
            </Grid>
          </DropdownContainer>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default CustomSelect;
