//**************************************REGISTER ****************************************************/

export const REGISTER_USER = 'register_user_requested';
export const REGISTER_FORM_UPDATE = 'register_form_update';
export const REGISTER_USER_SUCCESS = 'register_user_success';
export const REGISTER_FORM_SUCCESS = 'register_form_success';
export const REGISTER_USER__ADD_ADDR_SUCCESS = 'register_user_add_add_success';
export const REGISTER_USER_FAIL = 'register_user_fail';
export const REGISTER_RESET = 'register_form_reset';

//**************************************LOGIN ****************************************************/
export const LOGIN_USER = 'login_user_requested';
export const LOGIN_FORM_UPDATE = 'login_form_update';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const GET_LOGIN_USER_INFO_SUCCESS = 'get_user_login_info_success';
export const UPDATE_USER_INFO_SUCCESS = 'update_user_info_success';
export const LOGIN_USER_FAIL = 'login_user_fail';
export const LOGIN_RESET = 'login_form_reset';

//**************************************FORGOT PASS ****************************************************/

export const FORGOT_PASSWORD_REQUEST = 'forgot_password_requested';
export const FORGOT_PASSWORD_FORM_UPDATE = 'forgot_password_form_update';
export const FORGOT_PASSWORD_SUCCESS = 'forgot_password_success';
export const FORGOT_PASSWORD_FAIL = 'forgot_password_fail';
export const FORGOT_PASSWORD_RESET = 'forgot_password_reset';

//**************************************EMAIL/MOBILE VERIFY ****************************************************/
export const VERIFY_USER = 'verify_user_requested';
export const VERIFY_FORM_UPDATE = 'verify_form_update';
export const VERIFY_USER_SUCCESS = 'verify_user_success';
export const VERIFY_USER_FAIL = 'verify_user_fail';
export const VERIFY_RESET = 'verify_form_reset';

//**************************************KYC/DOCUMENT VERIFY ****************************************************/
export const DOC_FORM_UPDATE = 'doc_form_update';
export const DOC_FORM_RESET = 'doc_form_reset';
export const DOC_SUBMIT_SUCCESS = 'doc_sub_success';
export const DOC_SUBMIT_FAIL = 'doc_sub_fail';
export const DOC_SUBMIT = 'doc_submit';
export const PIC_SUBMIT = 'pic_submit';
export const PICTURE_UPLOAD_SUCCESS = 'pic_success';
export const PICTURE_UPLOAD_FAIL = 'pic_fail';

//************************************** REDEEM GOLD  ****************************************************/
export const REDEEM_FORM_UPDATE = 'redeem_form_update';
export const REDEEM_FORM_RESET = 'redeemc_form_reset';
export const REDEEM_SUBMIT_SUCCESS = 'redeem_sub_success';
export const GET_FIAT_EQUE_SUCCESS = 'fiat_eq_get_success';
export const REDEEM_SUBMIT_FAIL = 'redeem_sub_fail';
export const REDEEM_GOLD_SUBMIT = 'redeem_sub';
export const REDEEM_PHOTO_SUCCESS = 'redeem_photo_success';
export const REDEEM_LOCK_AMOUNT_SUCCESS = 'redeem_lock_amt_success';
export const BANK_DETAILS_SUCCESS = 'redeem_lock_amt_success';

//**************************************USER WALLET DETAILS ****************************************************/
export const USER_WALLET_DETAIL_SUBMIT = 'user_wallet_Det_requested';
export const USER_WALLET_FORM_UPDATE = 'user_wallet_form_update';
export const USER_WALLET_SUCCESS = 'user_wallet_user_success';
export const GOLD_DETAILS_SUCCESS = 'gold_details_success';
export const ANNO_DETAILs_SUCCESS = 'anno_details_success';
export const USER_WALLET_FAIL = 'user_wallet_user_fail';
export const USER_WALLET_RESET = 'user_wallet_form_reset';

//**************************************USER CONTACTS DETAILS ****************************************************/
export const GET_CONTACTS_SUBMIT = 'get_all_contacts_requested';
export const GET_CONTACTS_FORM_UPDATE = 'get_all_contacts_form_update';
export const GET_CONTACTS_SUCCESS = 'get_all_contacts_success';
export const SAVE_CONTACT_SUCCESS = 'save_contacts_success';
export const GET_CONTACTS_FAIL = 'get_all_contacts_fail';
export const GET_CONTACTS_RESET = 'get_all_contacts_form_reset';

//**************************************COIN LIST ACTIONS ****************************************************/
export const GET_COINS_SUBMIT = 'get_all_conins_requested';
export const GET_COINS_FORM_UPDATE = 'get_coins_form_update';
export const GET_ALL_COINS_SUCCESS = 'get_all_conins_success';
export const GET_MY_COINS_SUCCESS = 'get_my_conins_success';
export const GET_TOKEN_IDS_SUCCESS = 'get_token_ids_success';
export const ENABLE_DIS_COIN_SUCCESS = 'save_contacts_success';
export const COIN_FORM_FAIL = 'coin_form_fail';

//**************************************CREATE NFT FORM ACTIONS ****************************************************/
export const NFT_FORM_SUBMIT = 'create_nft_form_requested';
export const NFT_FORM__UPDATE = 'create_nft_form_update';
export const NFT_FORM__SUCCESS = 'create_nft_success';
export const NFT_TOKENS_SUCC = 'get_nft_success';
export const NFT_TOKENS_SUCC_PUB = 'get_nft_success_pub';
export const NFT_FORM__FAIL = 'create_nft_form_fail';
export const NFT_FORM_RESET = 'create_nft_form_reset';

//************************************* SEND TOKEN ****************************************************/
export const GET_RAW_DATA_SUBMIT = 'get_raw_data_requested';
export const SEND_TOKEN_FORM_UPDATE = 'Send_token_form_update';
export const GET_RAW_DATA_SUCCESS = 'get_raw_data_success';
export const GET_NONCE_SUCCESS = 'get_nonce_success';
export const GET_NONCE_FAIL = 'get_nonce_fail';
export const GET_RAW_DATA_FAIL = 'gget_raw_data_fail';
export const SEND_TOKEN_RESET = 'send_token_form_reset';
export const SEND_TOKEN_FAIL = 'send_token_fail';
export const SEND_TOKEN_SUCCESS = 'send_token_success';

//************************************* SEND TOKEN ****************************************************/
export const CRE_PAY_DATA_SUBMIT = 'create_pay_data_requested';
export const CRE_PAY_FORM_UPDATE = 'cre_pay_form_update';
export const CRE_PAY_DATA_SUCCESS = 'cre_pay_data_success';
// export const GET_NONCE_SUCCESS = 'get_nonce_success';

//************************************* REDEMPTION ****************************************************/
export const REDEMPTION_REQ_SUBMIT = 'redemption_requested';
export const REDEMPTION_FORM_UPDATE = 'redemption_form_update';
export const GOLDSMITH_DETAIL_SUCCESS = 'goldsmith_details_success';
export const GOLDSMITH_DETAIL_FAIL = 'goldsmith_details_fail';
export const REDEEM_REQ_SUCCESS = 'redeem_req_success';
export const REDEEM_REQ_FAIL = 'redeem_req_fail';
export const REDEMPTION_FORM_RESET = 'redemption_form_reset';
export const GOLDSMITHS_LIST_SUCCESS = 'goldsmith_list_success';
export const GOLD_HIST_SUCCESS = 'gold_hist_list_success';
export const GOLDSMITHS_LIST_FAIL = 'goldsmith_list_fail';
export const PAST_EVENTS_SUCCESS = 'past_events_list_success';
export const GOLDSMITH_SUPPLY_CHECK_SUCCESS = 'goldsmith_supply_success';
export const PAST_EVENTS_LIST_FAIL = 'past_events_list_fail';

//************************************* TxnHistory ****************************************************/
export const TXN_HIST_REQ_SUBMIT = 'get_txn_hist_requested';
export const TXN_HIST_FORM_UPDATE = 'txn_hist_form_update';
export const TXN_HIST_SUCCESS = 'txn_hist_success';
export const TXN_DETAIL_SUCCESS = 'txn_detail_success';
export const TXN_HIST_FAIL = 'txn_hist_fail';
export const TXN_HIST_FORM_RESET = 'txn_hist_form_reset';

//************************************* Set pin ****************************************************/
export const SET_PIN_REQ_SUBMIT = 'set_pin_requested';
export const PIN_FORM_UPDATE = 'pin_form_update';
export const SET_PIN_SUCCESS = 'set_pin_success';
export const SET_PIN_FAIL = 'set_pin_fail';
export const SET_PIN_FORM_RESET = 'set_pin_form_reset';

//************************************* Languagge ****************************************************/
export const LANG_REQ_SUBMIT = 'language_requested';
export const LANG_FORM_UPDATE = 'language_form_update';
export const LANG_SUCCESS = 'language_success';
export const LANG_FAIL = 'language_fail';
export const LANG_FORM_RESET = 'language_form_reset';

//************************************* Set pin ****************************************************/
export const CHANGE_PASS_REQ_SUBMIT = 'change_pass_requested';
export const CHANGE_PASS_FORM_UPDATE = 'change_pass_form_update';
export const CHANGE_PASS_SUCCESS = 'change_pass_success';
export const LOGOUT_API_SUCCESS = 'logout_api_success';
export const CHANGE_PASS_FAIL = 'change_pass_fail';
export const CHANGE_PASS_FORM_RESET = 'change_pass_form_reset';

//************************************* token history ****************************************************/
export const TOKEN_HIST_REQ_SUBMIT = 'token_history_requested';
export const TOKEN_HIST_FORM_UPDATE = 'token_history_form_update';
export const TOKEN_HIST_SUCCESS = 'token_history_success';
export const TOKEN_HIST_FAIL = 'token_history_fail';
export const TOKEN_HIST_FORM_RESET = 'token_history_form_reset';

//************************************* Market Place ****************************************************/
export const GET_MARKET_PLACE_DATA_PENDING = 'GET_MARKET_PLACE_DATA_PENDING';
export const GET_MARKET_PLACE_DATA_SUCCESS = 'GET_MARKET_PLACE_DATA_SUCCESS';
export const GET_MARKET_PLACE_DATA_FAIL = 'GET_MARKET_PLACE_DATA_FAIL';
export const FILTER_MARKET_PLACE_DATA_BY_SEARCH =
  'FILTER_MARKET_PLACE_DATA_BY_SEARCH';
export const FILTER_MARKET_PLACE_DATA_BY_TAG =
  'FILTER_MARKET_PLACE_DATA_BY_TAG';

//************************************* Wallet ****************************************************/

export const GET_WALLET_DATA_PENDING = 'GET_WALLET_DATA_PENDING';
export const GET_WALLET_DATA_SUCCESS = 'GET_WALLET_DATA_SUCCESS';
export const GET_WALLET_DATA_FAIL = 'GET_WALLET_DATA_FAIL';

//************************************* GET NOUNCE ****************************************************/

export const GET_NOUNCE_PENDING = 'GET_NOUNCE_PENDING';
export const GET_NOUNCE_SUCCESS = 'GET_NOUNCE_SUCCESS';
export const GET_NOUNCE_FAIL = 'GET_NOUNCE_FAIL';

//************************************* GET GAS ESTIMATION FOR BUY NFT ****************************************************/

export const GET_GAS_PENDING = 'GET_GAS_PENDING';
export const GET_GAS_SUCCESS = 'GET_GAS_SUCCESS';
export const GET_GAS_FAIL = 'GET_GAS_FAIL';

//*************************************  BUY NFT ****************************************************/

export const BUY_NFT_PENDING = 'BUY_NFT_PENDING';
export const BUY_NFT_SUCCESS = 'BUY_NFT_SUCCESS';
export const BUY_NFT_FAIL = 'BUY_NFT_FAIL';

//*************************************  GET NFT TRX ****************************************************/

export const TRX_NFT_PENDING = 'TRX_NFT_PENDING';
export const TRX_NFT_SUCCESS = 'TRX_NFT_SUCCESS';
export const TRX_NFT_FAIL = 'TRX_NFT_FAIL';

//************************************* Deposit ****************************************************/

export const GET_DEPOSIT_DATA_PENDING = 'GET_DEPOSIT_DATA_PENDING';
export const GET_DEPOSIT_DATA_SUCCESS = 'GET_DEPOSIT_DATA_SUCCESS';
export const GET_DEPOSIT_DATA_FAIL = 'GET_DEPOSIT_DATA_FAIL';

//************************************* Withdraw ****************************************************/

export const GET_WITHDRAW_DATA_PENDING = 'GET_WITHDRAW_DATA_PENDING';
export const GET_WITHDRAW_DATA_SUCCESS = 'GET_WITHDRAW_DATA_SUCCESS';
export const GET_WITHDRAW_DATA_FAIL = 'GET_WITHDRAW_DATA_FAIL';
export const SET_TO_ADDRESS = 'SET_TO_ADDRESS';

//************************************* UPDATE IMAGE ****************************************************/

export const UPDATE_IMAGE_PENDING = 'UPDATE_IMAGE_PENDING';
export const UPDATE_IMAGE_SUCCESS = 'UPDATE_IMAGE_SUCCESS';
export const UPDATE_IMAGE_FAIL = 'UPDATE_IMAGE_FAIL';
// export const GET_CURRENT_PRICES_DATA_FAIL = 'GET_CURRENT_PRICES_DATA_FAIL';
// export const GET_CURRENT_PRICES_DATA_PENDING =
//   'GET_CURRENT_PRICES_DATA_PENDING';
// export const GET_CURRENT_PRICES_DATA_SUCCESS =
//   'GET_CURRENT_PRICES_DATA_SUCCESS';
export const GET_CURRENT_PRICES_DATA_FAIL = 'GET_CURRENT_PRICES_DATA_FAIL';
export const GET_CURRENT_PRICES_DATA_PENDING =
  'GET_CURRENT_PRICES_DATA_PENDING';
export const GET_CURRENT_PRICES_DATA_SUCCESS =
  'GET_CURRENT_PRICES_DATA_SUCCESS';
export const GET_WITHDRAW_NONCE_DATA_PENDING =
  'GET_WITHDRAW_NONCE_DATA_PENDING';
export const GET_WITHDRAW_NONCE_DATA_FAIL = 'GET_WITHDRAW_NONCE_DATA_FAIL';
export const GET_WITHDRAW_NONCE_DATA_SUCCESS =
  'GET_WITHDRAW_NONCE_DATA_SUCCESS';
export const GET_WITHDRAW_SEND_TOKEN_DATA_FAIL =
  'GET_WITHDRAW_SEND_TOKEN_DATA_FAIL';
export const GET_WITHDRAW_SEND_TOKEN_DATA_PENDING =
  'GET_WITHDRAW_SEND_TOKEN_DATA_PENDING';
export const GET_WITHDRAW_SEND_TOKEN_DATA_SUCCESS =
  'GET_WITHDRAW_SEND_TOKEN_DATA_SUCCESS';

//************************************* HomeList ****************************************************/

export const GET_HOMEPAGE_LIST_PENDING = ' GET_HOMEPAGE_LIST_PENDING';
export const GET_HOMEPAGE_LIST_SUCCESS = 'GET_HOMEPAGE_LIST_SUCCESS';
export const GET_HOMEPAGE_LIST_FAIL = 'GET_HOMEPAGE_LIST_FAIL';

export const POST_HOMEPAGE_LIKES_PENDING = 'GET_HOMEPAGE_LIKES_PENDING';
export const POST_HOMEPAGE_LIKES_SUCCESS = 'GET_HOMEPAGE_LIKES_SUCCESS';
export const POST_HOMEPAGE_LIKES_FAIL = 'GET_HOMEPAGE_LIKES_FAIL';

export const NFT_DETAILS_PROPS_UPDATE = 'NFT_DETAILS_PROPS_UPDATE';

//*********************************** Comment **********************************************/

export const POST_COMMENT_DATA_PENDING = 'POST_COMMENT_DATA_PENDING';
export const POST_COMMENT_DATA_SUCCESS = 'POST_COMMENT_DATA_SUCCESS';
export const POST_COMMENT_DATA_FAIL = 'POST_COMMENT_DATA_FAIL';

export const GET_COMMENT_DATA_FAIL = ' GET_COMMENT_DATA_FAIL';
export const GET_COMMENT_DATA_PENDING = ' GET_COMMENT_DATA_PENDING';
export const GET_COMMENT_DATA_SUCCESS = ' GET_COMMENT_DATA_SUCCESS';

export const GET_HOME_DETAILS__PENDING = ' GET_HOME_DETAILS__PENDING';
export const GET_HOME_DETAILS_SUCCESS = ' GET_HOME_DETAILS_SUCCESS';
export const GET_HOME_DETAILS_FAIL = ' GET_HOME_DETAILS_FAIL';

export const CHANGE_COMMENT_FORM_UPDATE = 'CHANGE_COMMENT_FORM_UPDATE';
export const UPDATE_HOMEPAGE_COMMENT = 'UPDATE_HOMEPAGE_COMMENT';

export const POST_FOLLOWING_PENDING = 'POST_FOLLOWING_PENDING';
export const POST_FOLLOWING_SUCCESS = 'POST_FOLLOWING_SUCCESS';
export const POST_FOLLOWING_FAIL = 'POST_FOLLOWING_FAIL';

export const POST_NFT_FOLLOWING_PENDING = 'POST_NFT_FOLLOWING_PENDING';
export const POST_NFT_FOLLOWING_SUCCESS = 'POST_NFT_FOLLOWING_SUCCESS';
export const POST_NFT_FOLLOWING_FAIL = 'POST_NFT_FOLLOWING_FAIL';

//*********************************** app version **********************************************/

export const GET_APP_VERSION_PENDING = ' GET_APP_VERSION_PENDING';
export const GET_APP_VERSION_SUCCESS = ' GET_APP_VERSION_SUCCESS';
export const GET_APP_VERSION_FAIL = ' GET_HOME_DETAILS_FAIL';

//*********************************** PlanAmountHoldAddress ************************************/

export const GET_PLAN_AMOUNT_HOLD_ADDRESS_DATA_PENDING =
  'GET_PLAN_AMOUNT_HOLD_ADDRESS_DATA_PENDING';
export const GET_PLAN_AMOUNT_HOLD_ADDRESS_DATA_SUCCESS =
  'GET_PLAN_AMOUNT_HOLD_ADDRESS_DATA_SUCCESS';
export const GET_PLAN_AMOUNT_HOLD_ADDRESS_DATA_FAIL =
  'GET_PLAN_AMOUNT_HOLD_ADDRESS_DATA_FAIL';

export const GET_UPGRADE_PLAN_TRNX_DATA_PENDING =
  'GET_UPGRADE_PLAN_TRNX_DATA_PENDING';
export const GET_UPGRADE_PLAN_TRNX_DATA_SUCCESS =
  'GET_UPGRADE_PLAN_TRNX_DATA_SUCCESS';
export const GET_UPGRADE_PLAN_TRNX_DATA_FAIL =
  'GET_UPGRADE_PLAN_TRNX_DATA_FAIL';

//*********************************** Contact List ************************************/

export const GET_CONTACT_LIST_DATA_PENDING = 'GET_CONTACT_LIST_DATA_PENDING';
export const GET_CONTACT_LIST_DATA_SUCCESS = 'GET_CONTACT_LIST_DATA_SUCCESS';
export const GET_CONTACT_LIST_DATA_FAIL = 'GET_CONTACT_LIST_DATA_FAIL';
export const POST_USER_CONTACT_DATA_FAIL = 'POST_USER_CONTACT_DATA_FAIL';
export const POST_USER_CONTACT_DATA_PENDING = 'POST_USER_CONTACT_DATA_PENDING';
export const POST_USER_CONTACT_DATA_SUCCESS = 'POST_USER_CONTACT_DATA_SUCCESS';

//*********************************** USER DETAILS  ************************************/

export const USER_DETAILS_PENDING = 'USER_DETAILS_PENDING';
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS';
export const USER_DETAILS_FAIL = 'USER_DETAILS_FAIL';

export const USER_PUBLIC_DETAILS_PENDING = 'USER_PUBLIC_DETAILS_PENDING';
export const USER_PUBLIC_DETAILS_SUCCESS = 'USER_PUBLIC_DETAILS_SUCCESS';
export const USER_PUBLIC_DETAILS_FAIL = 'USER_PUBLIC_DETAILS_FAIL';

export const USER_PRIVATE_DETAILS_PENDING = 'USER_PRIVATE_DETAILS_PENDING';
export const USER_PRIVATE_DETAILS_SUCCESS = 'USER_PRIVATE_DETAILS_SUCCESS';
export const USER_PRIVATE_DETAILS_FAIL = 'USER_PRIVATE_DETAILS_FAIL';
export const POST_USER_FOLLOWING_SUCCESS ="POST_USER_FOLLOWING_SUCCESS";

//*********************************** FOLLOWING DETAILS  ************************************/

export const GET_FOLLOWING_DATA_PENDING = 'GET_FOLLOWING_DATA_PENDING';
export const GET_FOLLOWING_DATA_SUCCESS = 'GET_FOLLOWING_DATA_SUCCESS';
export const GET_FOLLOWING_DATA_FAIL = 'GET_FOLLOWING_DATA_FAIL';
export const SET_FOLLOWING_DATA_EMPTY = 'SET_FOLLOWING_DATA_EMPTY';

