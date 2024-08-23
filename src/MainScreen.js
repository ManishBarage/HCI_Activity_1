import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Container, TextareaAutosize, Typography, Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import SaveIcon from '@mui/icons-material/Save';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import UndoIcon from '@mui/icons-material/Undo';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import PrintIcon from '@mui/icons-material/Print';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import MailIcon from '@mui/icons-material/Mail';
import HelpIcon from '@mui/icons-material/Help';

const ToolbarStyled = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const LogoSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Logo = styled('img')({
  width: '40px',
  height: '40px',
  marginRight: '10px',
});

function MainScreen() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState(null);
  const [showSaveNotification, setShowSaveNotification] = useState(false);

  const handleClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenu(null);
  };

  const handleSave = () => {
    // Simulate saving the file
    setShowSaveNotification(true);

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setShowSaveNotification(false);
    }, 3000);
  };

  return (
    <div>
      <AppBar position="static">
        <ToolbarStyled>
          <div>
            <Button color="inherit" onClick={(e) => handleClick(e, 'File')}>File</Button>
            <Button color="inherit" onClick={(e) => handleClick(e, 'Edit')}>Edit</Button>
            <Button color="inherit" onClick={(e) => handleClick(e, 'Format')}>Format</Button>
            <Button color="inherit" onClick={(e) => handleClick(e, 'View')}>View</Button>
            <Button color="inherit" onClick={(e) => handleClick(e, 'Tools')}>Tools</Button>
            <Button color="inherit" onClick={(e) => handleClick(e, 'Mail')}>Mail</Button>
            <Button color="inherit" onClick={(e) => handleClick(e, 'Preferences')}>Preferences</Button>
            <Button color="inherit" onClick={(e) => handleClick(e, 'Help')}>Help</Button>
          </div>
          <LogoSection>
            <Logo src="a.jfif" alt="Logo" />
            <Typography variant="h6" color="inherit">
              MyWordProcessor
            </Typography>
          </LogoSection>
        </ToolbarStyled>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menu === 'File' && (
          <>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> New</MenuItem>
            <MenuItem onClick={handleClose}><FileOpenIcon style={{ marginRight: '10px' }} /> Open File</MenuItem>
            <MenuItem onClick={handleClose}><FileOpenIcon style={{ marginRight: '10px' }} /> Open Copy of File</MenuItem>
            <MenuItem onClick={handleSave}><SaveIcon style={{ marginRight: '10px' }} /> Save</MenuItem>
            <MenuItem onClick={handleClose}><SaveIcon style={{ marginRight: '10px' }} /> Save As</MenuItem>
            <MenuItem onClick={handleClose}><SaveIcon style={{ marginRight: '10px' }} /> Close File</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Delete</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Quit</MenuItem>
          </>
        )}
        {menu === 'Edit' && (
          <>
            <MenuItem onClick={handleClose}><UndoIcon style={{ marginRight: '10px' }} /> Undo</MenuItem>
            <MenuItem onClick={handleClose}><ContentCutIcon style={{ marginRight: '10px' }} /> Cut</MenuItem>
            <MenuItem onClick={handleClose}><ContentCopyIcon style={{ marginRight: '10px' }} /> Copy</MenuItem>
            <MenuItem onClick={handleClose}><ContentPasteIcon style={{ marginRight: '10px' }} /> Paste</MenuItem>
            <MenuItem onClick={handleClose}><UndoIcon style={{ marginRight: '10px' }} /> Clear</MenuItem>
            <MenuItem onClick={handleClose}><UndoIcon style={{ marginRight: '10px' }} /> Repeat Edit</MenuItem>
            <MenuItem onClick={handleClose}><UndoIcon style={{ marginRight: '10px' }} /> Find Word</MenuItem>
            <MenuItem onClick={handleClose}><UndoIcon style={{ marginRight: '10px' }} /> Change Word</MenuItem>
            <MenuItem onClick={handleClose}><UndoIcon style={{ marginRight: '10px' }} /> Go To</MenuItem>
            <MenuItem onClick={handleClose}><UndoIcon style={{ marginRight: '10px' }} /> Go Back</MenuItem>
          </>
        )}
        {menu === 'Format' && (
          <>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Plain Text</MenuItem>
            <MenuItem onClick={handleClose}><FormatBoldIcon style={{ marginRight: '10px' }} /> Bold Text</MenuItem>
            <MenuItem onClick={handleClose}><FormatItalicIcon style={{ marginRight: '10px' }} /> Italic Text</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Underline</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Character Style</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Format Paragraph</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Lay Out Document</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Increase Point Size</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Decrease Point Size</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Change Font</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Position on Page</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Add Footnote</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Insert Graphic</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Insert Index Entry</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Add Page Break</MenuItem>
          </>
        )}
        {menu === 'View' && (
          <>
            <MenuItem onClick={handleClose}><PrintIcon style={{ marginRight: '10px' }} /> View Page</MenuItem>
            <MenuItem onClick={handleClose}><PrintIcon style={{ marginRight: '10px' }} /> Print Preview</MenuItem>
            <MenuItem onClick={handleClose}><PrintIcon style={{ marginRight: '10px' }} /> Show Alternative Document</MenuItem>
            <MenuItem onClick={handleClose}><PrintIcon style={{ marginRight: '10px' }} /> See Table of Contents</MenuItem>
            <MenuItem onClick={handleClose}><PrintIcon style={{ marginRight: '10px' }} /> View Index</MenuItem>
          </>
        )}
        {menu === 'Tools' && (
          <>
            <MenuItem onClick={handleClose}><SpellcheckIcon style={{ marginRight: '10px' }} /> Check Spelling</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Count Words</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Renumber Pages</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Repaginate</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Glossary</MenuItem>
          </>
        )}
        {menu === 'Mail' && (
          <>
            <MenuItem onClick={handleClose}><MailIcon style={{ marginRight: '10px' }} /> Open Mail</MenuItem>
            <MenuItem onClick={handleClose}><MailIcon style={{ marginRight: '10px' }} /> Send Mail</MenuItem>
          </>
        )}
        {menu === 'Preferences' && (
          <>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Preferences</MenuItem>
            <MenuItem onClick={handleClose}><DescriptionIcon style={{ marginRight: '10px' }} /> Page Setup</MenuItem>
          </>
        )}
        {menu === 'Help' && (
          <>
            <MenuItem onClick={handleClose}><HelpIcon style={{ marginRight: '10px' }} /> Help</MenuItem>
          </>
        )}
      </Menu>


      {/* Content Typing Area */}
      <Container>
        <TextareaAutosize
          minRows={20}
          style={{ width: '100%', marginTop: '20px', padding: '7px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          placeholder="Start typing your content here..."
        />
      </Container>

      {showSaveNotification && (
        <Typography 
          variant="subtitle1" 
          style={{ 
            color: 'green', 
            position: 'absolute', 
            top: '80px', 
            right: '20px', 
            backgroundColor: '#e0f7e9', 
            padding: '5px 10px', 
            borderRadius: '4px' 
          }}>
          File saved successfully!
        </Typography>
      )}
    </div>
  );
}

export default MainScreen;
