class ArticlesController < ApplicationController
  def index
    if params[:query].present?
      sql_query = " \
        articles.title @@ :query \
        OR articles.text @@ :query \
        OR articles.author @@ :query \
      "
      @articles = Article.where(sql_query, query: "%#{params[:query]}%")
    else
      @articles = Article.all.order('created_at DESC')
    end
    @display_footer = true
  end

  def edit
    @article = Article.find(params[:id])
    @display_footer = false
  end

  def update
    @article = Article.find(params[:id])
    if @article.update(article_params)
      redirect_to @article
    else
      render 'edit'
    end
    @display_footer = false
  end

  def show
    @article = Article.find(params[:id])
    @user = @article.user
    @display_footer = true
  end

  def new
    @article = Article.new
    @display_footer = false
  end

  def create
    @article = Article.new(article_params)
    @article.user = current_user
    if @article.save
      redirect_to @article
    else
      render 'new'
    end
    @display_footer = false
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to articles_path
    @display_footer = false
  end

  private

  def article_params
    params.require(:article).permit(:title, :text, :photo, :author, :date)
  end
end
