import React from "react"
import styled from "styled-components"
import palette from "../themes"
import { Personal } from "./form"

const Card = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`

const StepperContainer = styled.div`
  display: grid;
  align-items: center;
  width: 80%;
  grid-template-columns: 1fr 2fr 1fr 2fr 1fr;
  /* something */
`

const StepperIcon = styled.div`
  /* something */
`

const StepperConnectors = styled.div`
  background-color: ${palette.background.secondary};
  height: 10%;
  /* something */
`

const FormContainer = styled.div`
  /* something */
`

const ActionIconContainer = styled.div`
  /* something */
`

const ActionIcon = styled.div`
  /* something */
`

const renderSwitch = formSelection => {
  switch (formSelection) {
    case "personal":
      return <Personal/>
    case "shoot":
      return <p>shoot</p>
    case "time":
      return <p>time</p>
    default:
      return <p>home</p>
  }
}

const data = {
  Personal: [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      type: "Email",
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      type: "text",
    },
  ],
}

const Stepper = () => {
  const [chosenForm, selectChosenForm] = React.useState("")
  return (
    <Card>
      {chosenForm}
      <StepperContainer>
        <StepperIcon onClick={() => selectChosenForm("personal")}>
          Personal Information
        </StepperIcon>
        <StepperConnectors />
        <StepperIcon onClick={() => selectChosenForm("shoot")}>
          Shoot Details
        </StepperIcon>
        <StepperConnectors />
        <StepperIcon onClick={() => selectChosenForm("time")}>
          Time And Day
        </StepperIcon>
      </StepperContainer>
      <FormContainer>{renderSwitch(chosenForm)}</FormContainer>
      <ActionIconContainer>
        <ActionIcon>Back</ActionIcon>
        <ActionIcon>Next (unless last)</ActionIcon>
      </ActionIconContainer>
    </Card>
  )
}

export default Stepper
