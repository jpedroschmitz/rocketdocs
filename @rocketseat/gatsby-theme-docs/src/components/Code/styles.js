import styled from '@emotion/styled';
import { darken } from 'polished';
import {
  LiveError as AuxLiveError,
  LivePreview as AuxLivePreview,
} from 'react-live';

export const Pre = styled.pre`
  text-align: left;
  padding: ${({ hasLanguage }) => (hasLanguage ? `2rem` : `1rem`)} 1rem 1rem
    1rem;
  overflow: auto;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  border-radius: ${({ hasTitle }) => (hasTitle ? '0 0 5px 5px' : '5px')};
  -webkit-overflow-scrolling: touch;
  overflow-wrap: break-word;
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);

  code {
    float: left;
    min-width: 100%;
    padding-right: 1rem;
  }

  .token-line {
    line-height: 22px;
    font-size: 14px;
    min-width: 100%;
  }

  .highlight-line {
    background-color: #44475a;
    margin-left: -1rem;
    margin-right: -2rem;
    padding: 0 0.75rem;
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const LiveWrapper = styled.div`
  border-radius: 5px;
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: 32px;
`;

export const StyledEditor = styled.div`
  font-family: Hack, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  font-variant: no-common-ligatures no-discretionary-ligatures
    no-historical-ligatures no-contextual;
  overflow: auto;
  position: relative;

  textarea,
  pre {
    font-size: 14px !important;
    line-height: 22px !important;
    padding: 1rem !important;
  }

  * > textarea:focus {
    outline: none;
  }

  .token {
    font-style: normal !important;
  }
`;

export const LivePreview = styled(AuxLivePreview)`
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
`;

export const LiveError = styled(AuxLiveError)`
  display: block;
  color: rgb(248, 248, 242);
  white-space: pre-wrap;
  text-align: left;
  font-size: 14px;
  font-family: Hack, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  font-variant: no-common-ligatures no-discretionary-ligatures
    no-historical-ligatures no-contextual;
  padding: 1rem;
  background: rgb(255, 85, 85);
`;

export const PreHeader = styled.div`
  background-color: ${darken('0.05', '#282a36')};
  color: rgb(248, 248, 242, 0.75);
  font-size: 12px;
  line-height: 18px;
  margin-top: 0.5rem;
  padding: 0.8rem 1rem;
  border-radius: 5px 5px 0 0;
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2rem;
  user-select: none;
  opacity: 0.3;
`;

export const CopyCode = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  border-radius: ${({ hasTitle }) => (!hasTitle ? '0 5px 0 5px' : '0 0 0 5px')};
  padding: 0.25rem 0.6rem;
  border: none;
  cursor: pointer;
  background: #44475a;
  color: rgb(248, 248, 242);
  transition: all 200ms ease;
  font-size: 12px;

  :disabled {
    cursor: not-allowed;
  }

  :not(:disabled) {
    :hover,
    :focus {
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;
