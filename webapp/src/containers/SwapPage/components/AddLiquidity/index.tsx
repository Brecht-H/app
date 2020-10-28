import React from 'react';
import { Helmet } from 'react-helmet';
import { MdAdd, MdArrowBack } from 'react-icons/md';
import { I18n } from 'react-redux-i18n';
import { Button, Col, FormGroup, Label, Row } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import classnames from 'classnames';

import LiquidityCard from '../../../../components/LiquidityCard';
import styles from './addLiquidity.module.scss';
import { SWAP_PATH } from '../../../../constants';

interface AddLiquidityProps {}

const AddLiquidity: React.FunctionComponent<AddLiquidityProps> = (
  props: AddLiquidityProps
) => {
  const popularTokenList = ['DFI', 'BTC', 'ETH'];
  const normalTokenList = ['DOO', 'MEOW'];

  return (
    <div className='main-wrapper'>
      <Helmet>
        <title>{I18n.t('containers.swap.swapPage.title')}</title>
      </Helmet>
      <header className='header-bar'>
        <Button
          to={SWAP_PATH}
          tag={RRNavLink}
          color='link'
          className='header-bar-back'
        >
          <MdArrowBack />
          <span>{I18n.t('containers.swap.addLiquidity.back')}</span>
        </Button>
        <h1 className={classnames({ 'd-none': false })}>
          {I18n.t('containers.swap.addLiquidity.addLiquidity')}
        </h1>
      </header>
      <div className='content'>
        <section>
          <Row>
            <Col md='5'>
              <LiquidityCard
                label={I18n.t('containers.swap.addLiquidity.input')}
                balance={100}
                amount={10}
                popularTokenList={popularTokenList}
                normalTokenList={normalTokenList}
              />
            </Col>
            <Col md='2' className='text-center vertical-center'>
              <MdAdd className={styles.svg} />
            </Col>
            <Col md='5'>
              <LiquidityCard
                label={I18n.t('containers.swap.addLiquidity.input')}
                balance={100}
                amount={20}
                popularTokenList={popularTokenList}
                normalTokenList={normalTokenList}
              />
            </Col>
          </Row>
        </section>
      </div>
      <footer className='footer-bar'>
        <div>
          <Row className='justify-content-between align-items-center'>
            <Col className='col-auto'>
              <FormGroup check>
                <Label check>
                  {I18n.t('containers.swap.addLiquidity.selectInputTokens')}
                </Label>
              </FormGroup>
            </Col>
            <Col className='d-flex justify-content-end'>
              <Button color='link' className='mr-3'>
                {I18n.t('containers.wallet.createNewWalletPage.continue')}
              </Button>
            </Col>
          </Row>
        </div>
      </footer>
    </div>
  );
};

export default AddLiquidity;