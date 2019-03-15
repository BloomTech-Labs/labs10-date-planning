import React, { useState } from 'react'

export default ({ currentUser, userToReport }) => {
  const subject = `Report User ${userToReport.id}`
  const message = `Tell us your concern about this user:%0D%0A`
  const bodySpace = `%0D%0A%0D%0A%0D%0A-----------------------`
  const reportedBy = `%0D%0AReported by: ${currentUser.id}`

  const body = message + bodySpace + reportedBy

  return (
    <div>
      <a href={`mailto:support@up4.life?subject=${subject}&body=${body}`}>Report</a>
    </div>
  )
}