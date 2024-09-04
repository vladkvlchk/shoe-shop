import { Typography, Box, useTheme } from "@mui/material"

interface BagPricingListProps {
  name: string
  value: number
  bold?: boolean
}

const BagPricingList: React.FC<BagPricingListProps> = ({
  name,
  value,
  bold,
}) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "20px", sm: "20px" },
          lineHeight: { xs: "24px", sm: "35px" },
        }}
        fontWeight={bold ? 600 : 400}
        color={theme.palette.text.primary}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "20px", sm: "20px" },
          lineHeight: { xs: "24px", sm: "35px" },
        }}
        fontWeight={bold ? 600 : 400}
        color={theme.palette.text.primary}
      >
        ${value}
      </Typography>
    </Box>
  )
}

export default BagPricingList
