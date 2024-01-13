import { Create, FiberManualRecord } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import { InsertComment } from '@mui/icons-material';
import { Inbox } from '@mui/icons-material';
import { Drafts } from '@mui/icons-material';
import { BookmarkBorder } from '@mui/icons-material';
import { PeopleAlt } from '@mui/icons-material';
import { Apps } from '@mui/icons-material';
import { FileCopy } from '@mui/icons-material';
import { ExpandLess } from '@mui/icons-material';
import SidebarOption from './SidebarOption';
import { ExpandMore } from '@mui/icons-material';
import { Add } from '@mui/icons-material';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase.js';
import { collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {
  const roomsCollectionRef = collection(db, 'rooms');
  const [channels, loading, error] = useCollectionData(roomsCollectionRef);
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
            <h2>KARAN HQ</h2>
            <h3>
                <FiberManualRecord />
                Karan Sharma
            </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add Channel" />

      {/* Display loading state */}
      {loading && <p>Loading...</p>}

      {/* Display error state */}
      {error && <p>Error: {error.message}</p>}

      {channels?.map(doc => (
      <SidebarOption key={doc.id} id={doc.id} title={doc.name} />
    ))}

  </SidebarContainer>
  );
}

export default Sidebar

const SidebarContainer = styled.div`
 color: white;
 background-color: var(--slack-color);
 flex: 0.3;
 border-top: #49274b;
 max-width: 260px;
 margin-top: 60px;

 > hr {
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #49274b;
 }
`;

const SidebarHeader = styled.div`
 display: flex;
 border-bottom: 1px solid #49274b;
 padding: 13px;

 > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
 }
`;

const SidebarInfo = styled.div`
 flex: 1;

 > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
 }

 > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
 }

 > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
 }
`;
