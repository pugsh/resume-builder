import React from 'react';
import styled from '@emotion/styled';
import {
    faBook,
    faTv,
    faHamburger,
    faEdit,
    faPlus,
    faDownload,
    faCheck,
    faSpellCheck
} from '@fortawesome/free-solid-svg-icons';
import { keySwitch } from '../util/util';
import Icon from '../components/icon/Icon';
import Button from '../components/button/Button';

const getIcon = keySwitch('sectionType', {
    education: () => <Icon icon={faBook} />,
    links: () => <Icon icon={faTv} />,
    profile_summary: () => <Icon icon={faHamburger} />,
    _: () => <Icon icon={faEdit} />
});

const StyledSection = styled('div')`
    color: #58585f;
    padding: 6px 7px;
    margin-bottom: 2px;
    width: 100%;
    vertical-align: middle;
`;

export const AddSectionAction = ({ onClick }) => (
    <StyledSection>
        <Button isBorderless appeareance="transparent" onClick={() => onClick({ sectionType: 'new_section' })}>
            <Icon icon={faPlus} />
            <span>Add Section</span>
        </Button>
    </StyledSection>
);

export const DownloadAction = ({ onClick }) => (
    <StyledSection>
        <Button isBorderless appeareance="transparent" onClick={() => onClick({ sectionType: 'download' })}>
            <Icon icon={faDownload} />
            <span>Download</span>
        </Button>
    </StyledSection>
);

export const ResumeCheckAction = ({ onClick }) => (
    <StyledSection>
        <Button isBorderless appeareance="transparent" onClick={() => onClick({ sectionType: 'resume_check' })}>
            <Icon icon={faCheck} />
            <span>Resume Check</span>
        </Button>
    </StyledSection>
);

export const SpellCheckAction = ({ onClick }) => (
    <StyledSection>
        <Button isBorderless appeareance="transparent" onClick={() => onClick({ sectionType: 'spell_check' })}>
            <Icon icon={faSpellCheck} />
            <span>Spell Check</span>
        </Button>
    </StyledSection>
);

export const SectionType = ({ label, sectionType, onClick }) => (
    <StyledSection>
        <Button isBorderless appeareance="transparent" onClick={() => onClick({ sectionType })}>
            {
                getIcon({ sectionType })
            }
            <span>{label}</span>
        </Button>
    </StyledSection>
);