import React from 'react';
import { Modal, Stack } from 'react-bootstrap'

export default function InstructionsModal({ handleClose, instructions}) {
  const recipeParts = {...instructions}
  return (
    <>
      <Modal show={instructions != null} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{recipeParts.name}</Modal.Title>  
        </Modal.Header>
        <Modal.Body>
          <Stack direction="vertical" gap="3">
              <h3>Ingredients</h3>
              <div className="wrap-line">
                {recipeParts.ingredients}
              </div>
              <h3>Instructions</h3>
              <div className="wrap-line">
                {recipeParts.instructions}
              </div>
          </Stack>
        </Modal.Body>
      </Modal>
    </>
  )
}