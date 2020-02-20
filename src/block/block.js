//  Import CSS.
import './editor.scss';
import './style.scss';

const {registerBlockType} = wp.blocks;
const {PanelBody, PanelRow, TextControl} = wp.components;
const {InspectorControls} = wp.editor;
const {__} = wp.i18n;


registerBlockType('rt/button-group', {
    title: __('Rt Button Group', "rt-button-group"),
    icon: 'shield',
    category: 'common',
    keywords: [
        __('Rt Button Group', "rt-button-group"),
        __('Buttons', "rt-button-group")
    ],
    attributes: {
        downloadBtnText: {
            type: 'string',
            default: 'Download / More Info'
        },
        downloadBtnLink: {
            type: 'string',
            default: ''
        },
        demoBtnText: {
            type: 'string',
            default: 'Check Demo'
        },
        demoBtnLink: {
            type: 'string',
            default: ''
        },
        hostingBtnText: {
            type: 'string',
            default: 'Get Hosting'
        },
        hostingBtnLink: {
            type: 'string',
            default: 'https://www.siteground.com/?referrer_id=7260292'
        }
    },
    edit: ({attributes, className, setAttributes}) => {
        const {downloadBtnText, downloadBtnLink, demoBtnText, demoBtnLink, hostingBtnText, hostingBtnLink} = attributes;
        return (
            [
                <InspectorControls>
                    <PanelBody title={__('Download Button')} initialOpen={true}>
                        <PanelRow>
                            <TextControl
                                label="Text"
                                value={downloadBtnText}
                                onChange={(text) => setAttributes({downloadBtnText: text})}
                            />
                        </PanelRow>
                        <PanelRow>
                            <TextControl
                                label="Link"
                                value={downloadBtnLink}
                                onChange={(link) => setAttributes({downloadBtnLink: link})}
                            />
                        </PanelRow>
                    </PanelBody>
                    <PanelBody title={__('Demo Button')} initialOpen={true}>
                        <PanelRow>
                            <TextControl
                                label="Text"
                                value={demoBtnText}
                                onChange={(text) => setAttributes({demoBtnText: text})}
                            />
                        </PanelRow>
                        <PanelRow>
                            <TextControl
                                label="Link"
                                value={demoBtnLink}
                                onChange={(link) => setAttributes({demoBtnLink: link})}
                            />
                        </PanelRow>
                    </PanelBody>
                    <PanelBody title={__('Hosting Button')}>
                        <PanelRow>
                            <TextControl
                                label="Text"
                                value={hostingBtnText}
                                onChange={(text) => setAttributes({hostingBtnText: text})}
                            />
                        </PanelRow>
                        <PanelRow>
                            <TextControl
                                label="Link"
                                value={hostingBtnLink}
                                onChange={(link) => setAttributes({hostingBtnLink: link})}
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
                ,
                <div className="vc-info-3">
                    <div className="vc-info3-btns">
                        {downloadBtnLink && (<a className="vc-info3-download" target="_blank" href={downloadBtnLink}
                                                rel="nofollow noopener noreferrer">{downloadBtnText}</a>)}
                        {demoBtnLink && (<a className="vc-info3-demo" target="_blank" href={demoBtnLink}
                                            rel="nofollow noopener noreferrer">{demoBtnText}</a>)}
                        {hostingBtnLink && (<a className="vc-info3-hosting" target="_blank" href={hostingBtnLink}
                                               rel="nofollow noopener noreferrer">{hostingBtnText}</a>)}
                    </div>
                </div>
            ]
        );
    },
    save: ({attributes}) => {
        const {downloadBtnText, downloadBtnLink, demoBtnText, demoBtnLink, hostingBtnText, hostingBtnLink} = attributes;
        return (
            <div className="vc-info-3">
                <div className="vc-info3-btns">
                    {downloadBtnLink && (<a className="vc-info3-download" target="_blank" href={downloadBtnLink}
                                            rel="nofollow noopener noreferrer">{downloadBtnText}</a>)}
                    {demoBtnLink && (<a className="vc-info3-demo" target="_blank" href={demoBtnLink}
                                        rel="nofollow noopener noreferrer">{demoBtnText}</a>)}
                    {hostingBtnLink && (<a className="vc-info3-hosting" target="_blank" href={hostingBtnLink}
                                           rel="nofollow noopener noreferrer">{hostingBtnText}</a>)}
                </div>
            </div>
        );
    }
});
